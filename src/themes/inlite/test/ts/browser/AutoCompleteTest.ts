// import { Chain } from '@ephox/agar';
// import { FocusTools } from '@ephox/agar';
// import { GeneralSteps } from '@ephox/agar';
// import { Keyboard } from '@ephox/agar';
// import { Keys } from '@ephox/agar';
// import { Pipeline } from '@ephox/agar';
// import { UiControls } from '@ephox/agar';
// import { UiFinder } from '@ephox/agar';
// import { TinyActions } from '@ephox/mcagar';
// import { TinyApis } from '@ephox/mcagar';
// import { TinyDom } from '@ephox/mcagar';
// import { TinyLoader } from '@ephox/mcagar';
// import ContextMenuPlugin from 'tinymce/plugins/contextmenu/Plugin';
// import ImagePlugin from 'tinymce/plugins/image/Plugin';
// import LinkPlugin from 'tinymce/plugins/link/Plugin';
// import PastePlugin from 'tinymce/plugins/paste/Plugin';
// import TablePlugin from 'tinymce/plugins/table/Plugin';
// import TextpatternPlugin from 'tinymce/plugins/textpattern/Plugin';
// import Theme from 'tinymce/themes/inlite/Theme';
// import Toolbar from 'tinymce/themes/inlite/test/Toolbar';
// import { UnitTest } from '@ephox/bedrock';

// UnitTest.asynctest('browser.AutoCompleteTest', function() {
//   var success = arguments[arguments.length - 2];
//   var failure = arguments[arguments.length - 1];

//   ImagePlugin();
//   LinkPlugin();
//   PastePlugin();
//   ContextMenuPlugin();
//   TablePlugin();
//   TextpatternPlugin();
//   Theme();

//   var cKeyStroke = function (keyvalue, modifiers) {
//     return Chain.op(function (dispatcher) {
//       Keyboard.keystroke(keyvalue, modifiers, dispatcher);
//     });
//   };

//   var sSetupLinkableContent = function (tinyApis) {
//     return GeneralSteps.sequence([
//       tinyApis.sSetContent(
//         '<h1 id="a">abc</h1>' +
//         '<h2 id="b">abcd</h2>' +
//         '<h3 id="c">abce</h3>'
//       ),
//       tinyApis.sSetSelection([0, 0], 0, [0, 0], 1)
//     ]);
//   };

//   var sSelectAutoCompleteLink = function (tinyApis, url) {
//     return Chain.asStep({}, [
//       Chain.fromParent(Toolbar.cWaitForToolbar, [
//         Toolbar.cClickButton('Insert/Edit link')
//       ]),
//       Chain.fromParent(UiFinder.cFindIn('input'), [
//         UiControls.cSetValue(url),
//         cKeyStroke(Keys.space(), {}),
//         cKeyStroke(Keys.down(), {})
//       ]),
//       Chain.inject(TinyDom.fromDom(document)),
//       Chain.fromParent(FocusTools.cGetFocused, [
//         cKeyStroke(Keys.down(), {}),
//         cKeyStroke(Keys.enter(), {})
//       ]),
//       Chain.fromParent(Toolbar.cWaitForToolbar, [
//         Toolbar.cClickButton('Ok')
//       ])
//     ]);
//   };

//   TinyLoader.setup(function (editor, onSuccess, onFailure) {
//     var tinyApis = TinyApis(editor);
//     var tinyActions = TinyActions(editor);

//     Pipeline.async({}, [
//       tinyApis.sFocus,
//       sSetupLinkableContent(tinyApis),
//       tinyActions.sContentKeystroke(Keys.space(), {}),
//       sSelectAutoCompleteLink(tinyApis, 'a'),
//       tinyApis.sAssertContent(
//         '<h1 id="a"><a href="#b">a</a>bc</h1>\n' +
//         '<h2 id="b">abcd</h2>\n' +
//         '<h3 id="c">abce</h3>'
//       )
//     ], onSuccess, onFailure);
//   }, {
//     theme: 'inlite',
//     plugins: 'image table link paste contextmenu textpattern',
//     insert_toolbar: 'quickimage media quicktable',
//     selection_toolbar: 'bold italic | quicklink h1 h2 blockquote',
//     inline: true,
//     skin_url: '/project/js/tinymce/skins/lightgray'
//   }, success, failure);
// });
