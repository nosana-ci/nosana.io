import Prism from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';

import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-yaml';

Prism.languages.vue = Prism.languages.markup;

export default Prism;
