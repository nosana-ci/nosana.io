export default () => {
  window.$zoho = window.$zoho || {};

  window.$zoho.salesiq = window.$zoho.salesiq || { widgetcode: 'c0f453d70dc16181842e4f8a9a99292c45489f29fc9cfb6e0ee2db01cda8829e', values: {}, ready: function () {} };
  const d = document;
  const s = d.createElement('script');
  s.type = 'text/javascript';
  s.id = 'zsiqscript';
  s.defer = true;
  s.src = 'https://salesiq.zoho.eu/widget';
  const t = d.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
  d.write('<div id=\'zsiqwidget\'></div>');

  // var w=window;var p = w.location.protocol;if(p.indexOf("http") < 0){p = "http"+":";}
  // var f = d.getElementsByTagName('script')[0],s = d.createElement('script');s.type = 'text/javascript'; s.async = false; if (s.readyState){s.onreadystatechange = function(){if (s.readyState=="loaded"||s.readyState == "complete"){s.onreadystatechange = null;try{loadwaprops('3z5d8d9748a99b95f5dbcdbcd881748614','3z0bf30a361720497f64a2209465bae0f2','3z9a076f5f29a9fd801a28da97bec35eb0595544b6746df24d8f996aad986f2380','3z1aacfea087d44a352da053d047040a74',0.0);}catch(e){}}};}else {s.onload = function(){try{loadwaprops('3z5d8d9748a99b95f5dbcdbcd881748614','3z0bf30a361720497f64a2209465bae0f2','3z9a076f5f29a9fd801a28da97bec35eb0595544b6746df24d8f996aad986f2380','3z1aacfea087d44a352da053d047040a74',0.0);}catch(e){}};};s.src =p+'//ma.zoho.eu/hub/js/WebsiteAutomation.js'; f.parentNode.insertBefore(s, f);
};
