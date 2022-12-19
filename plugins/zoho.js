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
};
