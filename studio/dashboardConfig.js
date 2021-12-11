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
                  buildHookId: '61b4abe8030c1adc147508de',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e9bz5rgb',
                  apiId: '98e14113-e7c7-47e5-a0c5-e15d74b2bb23'
                },
                {
                  buildHookId: '61b4abe85ea88fde1f645a7f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xgbonrm1',
                  apiId: '8ec98bf0-672d-4bba-938a-6459e94da938'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sethii/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xgbonrm1.netlify.app',
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
