export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5df2762512565ed46cab2b8b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio7-studio-k65kdvcw',
                  apiId: '1018fab4-96a6-41d1-80ea-1a3f168bf331'
                },
                {
                  buildHookId: '5df2762559aa1b0180263231',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio7-web',
                  apiId: 'e030f186-b438-49dd-8f80-cb12f4fa70f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ramanan12345/sanity-gatsby-portfolio7',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio7-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
