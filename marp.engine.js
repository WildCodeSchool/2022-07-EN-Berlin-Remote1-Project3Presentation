module.exports = ({ marp }) => {
    return marp
        .use(require('markdown-it-emoji'))
        .use(require('markdown-it-mark'))
        .use(require('markdown-it-attrs'))
        .use(require('markdown-it-plantuml'))
        .use(require('markdown-it-container'), 'fence')
        .use(require('markdown-it-task-lists'), { enabled: true });
};
