import { create } from "@storybook/theming/create";

export default create({
    base: 'dark',
    brandTitle: 'Yuri Maciel Storybook',
    brandImage: 'https://i.imgur.com/eeimt2d.jpeg',
    brandUrl: 'https://github.com/o-yurimaciel',
    brandTarget: '_self',
    fontBase: 'Roboto, sans-serif',
    fontCode: 'monospace',
    colorPrimary: '#282828',
    colorSecondary: '#fff',
    // UI
    appBg: '#282828',
    appContentBg: '#fff',
    appPreviewBg: '#fff',
    appBorderColor: '#fff',
    appBorderRadius: 4,

    // Text colors
    textColor: '#fff',
    textInverseColor: '#000',

    // Toolbar default and active colors
    barTextColor: '#fff',
    barSelectedColor: '#282828',
    barBg: '#fff',

    // Form colors
    inputBg: '#fff',
    inputBorder: '#282828',
    inputTextColor: '#282828',
    inputBorderRadius: 3,
})