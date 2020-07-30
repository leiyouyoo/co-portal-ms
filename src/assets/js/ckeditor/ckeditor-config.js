(function () {
  CKEDITOR.basePath = '/src/assets/js/ckeditor/';
  CKEDITOR.plugins.addExternal('exportpdf', 'plugins/ckeditor4-plugin-exportpdf/');
  CKEDITOR.plugins.addExternal('print', 'plugins/print/');
  CKEDITOR.plugins.print = {
    exec: function (editor) {
      var data = editor.getData();

      pdfAPI.generateFromHTML(data);
    },
  };

  CKEDITOR.editorConfig = function (config) {
    config.extraPlugins = 'exportpdf,print';
  };
})();
