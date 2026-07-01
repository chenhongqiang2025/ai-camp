/**
 * teacher-auth.js  ·  统一教师身份识别 · 所有 ai-camp 页面共享
 *
 * 用法：
 *   <script src="./teacher-auth.js"></script>
 *   const t = window.TeacherAuth;
 *   t.isTeacher();           // -> true/false
 *   t.applyGate({...});      // 一行完成本页面锁 UI
 *
 * 三种解锁触发（任何页面都能用）：
 *   ① URL 参数 ?unlock=<pass>
 *   ② Ctrl+K 键盘弹密码框
 *   ③ 页面自己的 UI 元素调用 TeacherAuth.promptUnlock()
 *
 * localStorage 一次记住 · 同 origin 全站通行 · 跨 tab 自动同步。
 * 退出用 TeacherAuth.logout()。
 */
(function () {
  'use strict';

  // ==== 单一密码常量 · Richard 更新只改这里 ====
  const TEACHER_PASS = 'richard-fnc-2026';

  // localStorage key（与 index.html 早期版本兼容）
  const KEY = 'ai_camp_teacher_unlock_v1';

  function isTeacher() {
    try { return localStorage.getItem(KEY) === '1'; } catch { return false; }
  }

  function unlock(pass) {
    if (pass === TEACHER_PASS) {
      try { localStorage.setItem(KEY, '1'); } catch {}
      _fire();
      return true;
    }
    return false;
  }

  function logout() {
    try { localStorage.removeItem(KEY); } catch {}
    _fire();
  }

  function promptUnlock() {
    const pass = prompt('教师访问码 · Teacher access code:');
    if (pass === null) return;
    if (unlock(pass)) {
      // Reload so every gate on this page re-applies cleanly
      location.reload();
    } else {
      alert('访问码不正确 · Access code incorrect');
    }
  }

  function _fire() {
    try { window.dispatchEvent(new Event('teacher-status-changed')); } catch {}
    _refreshBodyClass();
  }

  function _refreshBodyClass() {
    if (!document.body) return;
    document.body.classList.toggle('teacher-unlocked', isTeacher());
    document.body.classList.toggle('teacher-locked', !isTeacher());
  }

  /**
   * applyGate({ hideOnLocked, showOnLocked, unlockedClass })
   *   - hideOnLocked : CSS 选择器 · 未解锁时隐藏
   *   - showOnLocked : CSS 选择器 · 未解锁时显示
   *   - onChange     : 回调 function(isTeacher)
   * Called with no args just re-applies body class.
   */
  function applyGate(opts) {
    opts = opts || {};
    const on = isTeacher();
    _refreshBodyClass();
    if (opts.hideOnLocked) {
      document.querySelectorAll(opts.hideOnLocked).forEach(el => {
        el.style.display = on ? '' : 'none';
      });
    }
    if (opts.showOnLocked) {
      document.querySelectorAll(opts.showOnLocked).forEach(el => {
        el.style.display = on ? 'none' : '';
      });
    }
    if (typeof opts.onChange === 'function') {
      try { opts.onChange(on); } catch (e) { console.warn(e); }
    }
  }

  // ============ Auto-boot ============
  // ① URL param unlock
  try {
    const p = new URL(location.href).searchParams.get('unlock');
    if (p === TEACHER_PASS) {
      try { localStorage.setItem(KEY, '1'); } catch {}
    }
  } catch {}

  // ② Ctrl+K anywhere
  document.addEventListener('keydown', (e) => {
    if (!e.key) return;
    if (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      e.preventDefault();
      promptUnlock();
    }
  });

  // ③ Cross-tab sync: when another tab flips the flag, this page re-applies
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) _fire();
  });

  // Apply body class as soon as body exists
  if (document.body) {
    _refreshBodyClass();
  } else {
    document.addEventListener('DOMContentLoaded', _refreshBodyClass);
  }

  // Public API
  window.TeacherAuth = {
    isTeacher,
    unlock,
    logout,
    promptUnlock,
    applyGate,
    PASS_HINT: TEACHER_PASS.replace(/./g, '•')  // for masked display only
  };
})();
