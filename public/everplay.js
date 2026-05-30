(function() {
  function show(el) { el.style.display = 'flex'; el.style.opacity = '1'; }
  function hide(el) { el.style.opacity = '0'; setTimeout(function() { el.style.display = 'none'; }, 300); }

  var founderTriggered = false;
  function triggerFounder() {
    if (founderTriggered) return;
    founderTriggered = true;
    var overlay = document.getElementById('founder-overlay');
    var text = document.getElementById('founder-text');
    if (!overlay) return;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(function() {
      if (text) text.classList.add('animate-founder-glow-pulse');
    }, 3500);
    setTimeout(function() {
      overlay.style.pointerEvents = 'auto';
    }, 4000);
  }

  function initLogin() {
    var btn = document.getElementById('login-btn');
    var toast = document.getElementById('login-toast');
    var msg = document.getElementById('login-toast-msg');
    if (!btn || !toast || !msg) return;
    var timer;
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var email = (document.getElementById('login-email')?.value || '').trim();
      var pass = (document.getElementById('login-password')?.value || '').trim();
      if (!email || !pass) { msg.textContent = '你暂时没有账号哟，注册一个试试嘛～'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); return; }
      try {
        var users = JSON.parse(localStorage.getItem('everplay_users') || '[]');
        var user = users.find(function(u) { return u.email === email; });
        if (!user) { msg.textContent = '未找到你的账户，请先注册'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); return; }
        if (user.password !== pass) { msg.textContent = '密码错误，请重试'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); return; }
        if (email === 'ybao0287@gmail.com') { triggerFounder(); return; }
        msg.textContent = '登录成功，欢迎回来！'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 3000);
      } catch(err) { msg.textContent = '你暂时没有账号哟，注册一个试试嘛～'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); }
    });
    var dismiss = toast.querySelectorAll('[data-action="dismiss"]');
    dismiss.forEach(function(el) { el.addEventListener('click', function() { hide(toast); clearTimeout(timer); }); });
  }

  function initRegister() {
    var btn = document.getElementById('reg-btn');
    var toast = document.getElementById('reg-toast');
    var msg = document.getElementById('reg-toast-msg');
    if (!btn || !toast || !msg) return;
    var timer;
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var uname = (document.getElementById('reg-username')?.value || '').trim();
      var em = (document.getElementById('reg-email')?.value || '').trim();
      var pw = document.getElementById('reg-password')?.value || '';
      var cpw = document.getElementById('reg-confirm')?.value || '';
      var agreed = document.getElementById('reg-agree')?.checked || false;
      if (!uname || !em || !pw || !cpw) { msg.textContent = '请填写所有字段'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); return; }
      if (!agreed) { msg.textContent = '请先同意服务条款和隐私政策'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); return; }
      if (pw !== cpw) { msg.textContent = '两次输入的密码不一致'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); return; }
      if (pw.length < 6) { msg.textContent = '密码长度不能少于6位'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); return; }
      try {
        var users = JSON.parse(localStorage.getItem('everplay_users') || '[]');
        if (users.find(function(u) { return u.email === em; })) { msg.textContent = '该邮箱已注册，请直接登录'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); return; }
        users.push({ username: uname, email: em, password: pw });
        localStorage.setItem('everplay_users', JSON.stringify(users));
        if (em === 'ybao0287@gmail.com') { triggerFounder(); msg.textContent = '创世者账号已创建！'; show(toast); return; }
        msg.textContent = '注册成功！即将跳转到登录页...'; show(toast);
        setTimeout(function() { window.location.href = '/everplay/login'; }, 2000);
      } catch(err) { msg.textContent = '注册失败，请重试'; show(toast); clearTimeout(timer); timer = setTimeout(function() { hide(toast); }, 4000); }
    });
    var dismiss = toast.querySelectorAll('[data-action="dismiss"]');
    dismiss.forEach(function(el) { el.addEventListener('click', function() { hide(toast); clearTimeout(timer); }); });
  }

  function init() {
    initLogin();
    initRegister();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }
})();
