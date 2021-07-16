export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f0e34e785d4551de74e2fc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-t6kby2vu',
                  apiId: 'becd198b-144a-456f-9577-e483e35544c1'
                },
                {
                  buildHookId: '60f0e34f23f1bc54bbbad802',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hencrdg2',
                  apiId: '54dd5ac8-2aa2-4508-9f2e-6b32e56d8ccb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitfyco/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hencrdg2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
