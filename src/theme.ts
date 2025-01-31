import { toArray } from '@antfu/utils'
import { getColors } from './primer'
import { Zb81Themes } from './colors'

export default function getTheme({ style, name, soft = false, black = false }) {
  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = options => options[style]

  const zb81 = (key: keyof typeof Zb81Themes, op = '') => pick({ light: Zb81Themes[key][1] + op, dark: Zb81Themes[key][0] + op })

  const primer = getColors(style)

  const foreground = black
    ? '#dbd7cacc'
    : zb81('foreground')
  const secondaryForeground = zb81('secondaryForeground')
  const activeForeground = zb81('activeForeground')
  const primary = zb81('primary')

  const border = soft
    ? zb81('lowBorder')
    : zb81('border')
  const background = black
    ? '#000'
    : soft
      ? zb81('lowBackground')
      : zb81('background')
  const activeBackground = black
    ? '#121212'
    : soft
      ? zb81('lowActiveBackground')
      : zb81('activeBackground')

  const punctuation = black
    ? zb81('punctuation', 'cc')
    : zb81('punctuation')

  const selectionBackgroundInActive = pick({ light: '#22222208', dark: '#eeeeee08' })
  const selectionBackgroundActive = pick({ light: '#22222215', dark: '#eeeeee15' })
  const selectionBackground = pick({ light: '#22222215', dark: '#eeeeee15' })

  const theme = {
    name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: {
      'focusBorder': '#00000000',
      foreground,
      'descriptionForeground': secondaryForeground,
      'errorForeground': zb81('red'),

      'textLink.foreground': primary,
      'textLink.activeForeground': primary,
      'textBlockQuote.background': background,
      'textBlockQuote.border': border,
      'textCodeBlock.background': background,
      'textPreformat.foreground': primer.gray[6],
      'textSeparator.foreground': primer.gray[3],

      'button.background': primary,
      'button.foreground': background,
      'button.hoverBackground': primary,

      'checkbox.background': activeBackground,
      'checkbox.border': pick({ light: primer.gray[3], dark: primer.gray[1] }),

      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': activeBackground,

      'input.background': activeBackground,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': secondaryForeground,
      'inputOption.activeBackground': zb81('ignored'),

      'badge.foreground': background,
      'badge.background': secondaryForeground,

      'progressBar.background': primary,

      'titleBar.activeForeground': activeForeground,
      'titleBar.activeBackground': background,
      'titleBar.inactiveForeground': primer.gray[5],
      'titleBar.inactiveBackground': background,
      'titleBar.border': activeBackground,

      'activityBar.foreground': foreground,
      'activityBar.inactiveForeground': zb81('ignored'),
      'activityBar.background': background,
      'activityBarBadge.foreground': background,
      'activityBarBadge.background': activeForeground,
      'activityBar.activeBorder': primary,
      'activityBar.border': border,

      'sideBar.foreground': activeForeground,
      'sideBar.background': background,
      'sideBar.border': border,
      'sideBarTitle.foreground': foreground,
      'sideBarSectionHeader.foreground': foreground,
      'sideBarSectionHeader.background': background,
      'sideBarSectionHeader.border': border,

      'list.hoverForeground': foreground,
      'list.inactiveSelectionForeground': foreground,
      'list.activeSelectionForeground': foreground,
      'list.hoverBackground': activeBackground,
      'list.inactiveSelectionBackground': activeBackground,
      'list.activeSelectionBackground': activeBackground,
      'list.inactiveFocusBackground': background,
      'list.focusBackground': activeBackground,
      'list.highlightForeground': primary,

      'tree.indentGuidesStroke': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'notificationCenterHeader.foreground': primer.gray[5],
      'notificationCenterHeader.background': background,
      'notifications.foreground': foreground,
      'notifications.background': background,
      'notifications.border': border,
      'notificationsErrorIcon.foreground': zb81('red'),
      'notificationsWarningIcon.foreground': zb81('orange'),
      'notificationsInfoIcon.foreground': zb81('blue'),

      'pickerGroup.border': border,
      'pickerGroup.foreground': foreground,
      'quickInput.background': background,
      'quickInput.foreground': foreground,
      'quickInputList.focusBackground': activeBackground,

      'statusBar.foreground': activeForeground,
      'statusBar.background': background,
      'statusBar.border': border,
      'statusBar.noFolderBackground': background,
      'statusBar.debuggingBackground': activeBackground,
      'statusBar.debuggingForeground': activeForeground,
      'statusBarItem.prominentBackground': activeBackground,

      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': border,
      'editorGroup.border': border,

      'tab.activeForeground': foreground,
      'tab.inactiveForeground': primer.gray[5],
      'tab.inactiveBackground': background,
      'tab.activeBackground': background,
      'tab.hoverBackground': activeBackground,
      'tab.unfocusedHoverBackground': background,
      'tab.border': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': secondaryForeground,

      'breadcrumb.foreground': primer.gray[5],
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.background': activeBackground,
      'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
      'breadcrumbPicker.background': background,

      'editor.foreground': foreground,
      'editor.background': background,
      'editorWidget.background': background,
      'editor.foldBackground': pick({ light: '#22222210', dark: '#eeeeee10' }),
      'editor.lineHighlightBackground': activeBackground,
      'editorLineNumber.foreground': zb81('ignored'),
      'editorLineNumber.activeForeground': activeForeground,
      'editorIndentGuide.background': pick({ light: '#00000015', dark: '#ffffff15' }),
      'editorIndentGuide.activeBackground': pick({ light: '#00000030', dark: '#ffffff30' }),
      'editorWhitespace.foreground': pick({ light: '#00000015', dark: '#ffffff15' }),
      // 'editorCursor.foreground': primary,

      'editor.findMatchBackground': pick({ light: '#e6cc7744', dark: '#e6cc7722' }),
      'editor.findMatchHighlightBackground': pick({ light: '#e6cc7766', dark: '#e6cc7744' }),
      'editor.inactiveSelectionBackground': selectionBackgroundInActive,
      'editor.selectionBackground': selectionBackground,
      'editor.selectionHighlightBackground': selectionBackgroundInActive,
      'editor.wordHighlightBackground': pick({ light: '#1c6b4805', dark: '#1c6b4805' }),
      'editor.wordHighlightStrongBackground': pick({ light: '#1c6b4810', dark: '#1c6b4810' }),
      'editorBracketMatch.background': pick({ light: '#1c6b4820', dark: '#4d937520' }),

      'diffEditor.insertedTextBackground': pick({ light: '#1c6b4815', dark: '#4d937522' }),
      'diffEditor.removedTextBackground': pick({ light: '#ab595910', dark: '#ab595922' }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0000' }),
      'scrollbarSlider.background': zb81('faded'),
      'scrollbarSlider.hoverBackground': zb81('ignored'),
      'scrollbarSlider.activeBackground': zb81('ignored'),
      'editorOverviewRuler.border': primer.white,

      'panel.background': background,
      'panel.border': border,
      'panelTitle.activeBorder': primary,
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': primer.gray[5],
      'panelInput.border': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'terminal.foreground': foreground,
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': pick({ light: '#aaaaaa', dark: '#777777' }),
      'terminal.ansiBrightBlue': zb81('blue'),
      'terminal.ansiBrightCyan': zb81('cyan'),
      'terminal.ansiBrightGreen': zb81('green'),
      'terminal.ansiBrightMagenta': zb81('magenta'),
      'terminal.ansiBrightRed': zb81('red'),
      'terminal.ansiBrightWhite': pick({ light: '#dddddd', dark: '#ffffff' }),
      'terminal.ansiBrightYellow': zb81('yellow'),
      'terminal.ansiBlack': pick({ light: Zb81Themes.background[0], dark: Zb81Themes.foreground[1] }),
      'terminal.ansiBlue': zb81('blue'),
      'terminal.ansiCyan': zb81('cyan'),
      'terminal.ansiGreen': zb81('green'),
      'terminal.ansiMagenta': zb81('magenta'),
      'terminal.ansiRed': zb81('red'),
      'terminal.ansiWhite': pick({ light: Zb81Themes.foreground[0], dark: Zb81Themes.foreground[0] }),
      'terminal.ansiYellow': zb81('yellow'),

      'gitDecoration.addedResourceForeground': zb81('green'),
      'gitDecoration.modifiedResourceForeground': zb81('blue'),
      'gitDecoration.deletedResourceForeground': zb81('red'),
      'gitDecoration.untrackedResourceForeground': zb81('cyan'),
      'gitDecoration.ignoredResourceForeground': zb81('ignored'),
      'gitDecoration.conflictingResourceForeground': zb81('orange'),
      'gitDecoration.submoduleResourceForeground': zb81('secondaryForeground'),

      'editorGutter.modifiedBackground': zb81('blue'),
      'editorGutter.addedBackground': zb81('green'),
      'editorGutter.deletedBackground': zb81('red'),

      'editorBracketHighlight.foreground1': zb81('cyan'),
      'editorBracketHighlight.foreground2': zb81('green'),
      'editorBracketHighlight.foreground3': zb81('orange'),
      'editorBracketHighlight.foreground4': zb81('magenta'),
      'editorBracketHighlight.foreground5': zb81('yellow'),
      'editorBracketHighlight.foreground6': zb81('blue'),

      'debugToolBar.background': background,
      'editor.stackFrameHighlightBackground': pick({ light: primer.yellow[1], dark: '#a707' }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: primer.yellow[2], dark: '#b808' }),

      'peekViewEditor.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewResult.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primary,
      'welcomePage.buttonBackground': primer.gray[1],
      'welcomePage.buttonHoverBackground': primer.gray[2],

      'problemsErrorIcon.foreground': zb81('red'),
      'problemsWarningIcon.foreground': zb81('orange'),
      'problemsInfoIcon.foreground': zb81('blue'),

      'editorError.foreground': zb81('red'),
      'editorWarning.foreground': zb81('orange'),
      'editorInfo.foreground': zb81('blue'),
      'editorHint.foreground': zb81('green'),

      'editorGutter.commentRangeForeground': zb81('ignored'),
      'editorGutter.foldingControlForeground': zb81('secondaryForeground'),

      'editorInlayHint.foreground': punctuation,
      'editorInlayHint.background': '#00000000',

      'editorStickyScroll.background': activeBackground,
      'editorStickyScrollHover.background': activeBackground,

      'menu.separatorBackground': border,
      'sash.hoverBorder': primary,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: zb81('namespace'),
      property: zb81('property'),
      interface: zb81('interface'),
      type: zb81('interface'),
      class: zb81('class'),
    },
    tokenColors: [
      {
        scope: [
          'comment',
          'punctuation.definition.comment',
          'string.comment',
        ],
        settings: {
          foreground: zb81('comment'),
        },
      },
      {
        scope: [
          'delimiter.bracket',
          'delimiter',
          'invalid.illegal.character-not-allowed-here.html',
          'keyword.operator.rest',
          'keyword.operator.spread',
          'keyword.operator.type.annotation',
          'keyword.operator.relational',
          'keyword.operator.assignment',
          'meta.brace',
          'meta.tag.block.any.html',
          'meta.tag.inline.any.html',
          'meta.tag.structure.input.void.html',
          'meta.type.annotation',
          'meta.embedded.block.github-actions-expression',
          'storage.type.function.arrow',
          'keyword.operator.type',
          'meta.objectliteral.ts',
          'punctuation',
        ],
        settings: {
          foreground: punctuation,
        },
      },
      {
        scope: [
          'constant',
          'entity.name.constant',
          'variable.language',
          'meta.definition.variable',
        ],
        settings: {
          foreground: zb81('constant'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: zb81('function'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground,
        },
      },
      {
        scope: [
          'entity.name.tag',
          'tag.html',
        ],
        settings: {
          foreground: zb81('keyword'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: zb81('function'),
        },
      },
      {
        scope: [
          'keyword',
          'storage.type.class.jsdoc',
        ],
        settings: {
          foreground: zb81('keyword'),
        },
      },
      {
        scope: [
          'storage',
          'storage.type',
          'support.type.builtin',
          'constant.language.undefined',
          'constant.language.null',
        ],
        settings: {
          foreground: zb81('builtin'),
        },
      },
      {
        scope: [
          'text.html.derivative',
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.java',
        ],
        settings: {
          foreground,
        },
      },
      {
        scope: [
          'string',
          'string punctuation.section.embedded source',
          'attribute.value',
        ],
        settings: {
          foreground: zb81('string'),
        },
      },
      {
        scope: [
          'punctuation.definition.string',
          'punctuation.support.type.property-name',
        ],
        settings: {
          foreground: zb81('string', '99'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: zb81('property'),
        },
      },
      {
        scope: [
          'property',
          'meta.property-name',
          'meta.object-literal.key',
          'entity.name.tag.yaml',
          'attribute.name',
        ],
        settings: {
          foreground: zb81('property'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name',
          'invalid.deprecated.entity.other.attribute-name.html',
        ],
        settings: {
          foreground: zb81('variable'),
        },
      },
      {
        scope: [
          'variable',
          'identifier',
        ],
        settings: {
          foreground: zb81('variable'),
        },
      },
      {
        scope: [
          'support.type.primitive',
          'entity.name.type',
        ],
        settings: {
          foreground: zb81('type'),
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: zb81('namespace'),
        },
      },
      {
        scope: [
          'keyword.operator',
          'keyword.operator.assignment.compound',
          'meta.var.expr.ts',
        ],
        settings: {
          foreground: zb81('operator'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: zb81('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: zb81('regex'),
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: zb81('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: zb81('yellow'),
        },
      },
      {
        scope: [
          'support.constant',
        ],
        settings: {
          foreground: zb81('constant'),
        },
      },
      {
        scope: [
          'constant.numeric',
          'number',
        ],
        settings: {
          foreground: zb81('number'),
        },
      },
      {
        scope: [
          'keyword.other.unit',
        ],
        settings: {
          foreground: zb81('builtin'),
        },
      },
      {
        scope: [
          'constant.language.boolean',
          'constant.language',
        ],
        settings: {
          foreground: zb81('boolean'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: zb81('orange'),
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: primary,
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: zb81('interface'),
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground,
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground,
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'constant.other.reference.link',
          'string.other.link',
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
        ],
        settings: {
          foreground: zb81('string'),
        },
      },
      {
        scope: [
          'markup.underline.link.markdown',
        ],
        settings: {
          foreground: secondaryForeground,
          fontStyle: 'underline',
        },
      },
      {
        scope: [
          'type.identifier',
        ],
        settings: {
          foreground: zb81('class'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name.html.vue',
        ],
        settings: {
          foreground: zb81('function'),
        },
      },
      {
        scope: [
          'invalid.illegal.unrecognized-tag.html',
        ],
        settings: {
          fontStyle: 'normal',
        },
      },
    ],
    rules: [],
  }

  // monaco rules
  const rules: any[] = []

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  theme.rules = rules

  return theme
}
