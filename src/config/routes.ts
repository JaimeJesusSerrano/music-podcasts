import { lazy, LazyExoticComponent } from 'react'

const Home = lazy(() => import(/* webpackChunkName: "Home" */ 'components/pages/home'))
const PageNotFound = lazy(() => import(/* webpackChunkName: "PageNotFound" */ 'components/pages/page-not-found'))
const Podcast = lazy(() => import(/* webpackChunkName: "Podcast" */ 'components/pages/podcast'))
// const PodcastEpisode = lazy(() => import(/* webpackChunkName: "PodcastEpisode" */ 'components/pages/podcast-episode'))

type JSXComponent = () => JSX.Element

export interface IRoutes {
  [key: string]: IRoute
}

export interface IRoute {
  component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  path: string
}

const routes: IRoutes = {
  home: {
    component: Home,
    name: 'home',
    path: '/',
  },
  pageNotFound: {
    component: PageNotFound,
    name: 'Page not found',
    path: '/page-not-found',
  },
  podcast: {
    component: Podcast,
    name: 'Podcast',
    path: '/podcast/:podcastId',
  },
  // podcastEpisode: {
  //   component: PodcastEpisode,
  //   name: 'Podcast Episode',
  //   path: '/podcast/:podcastId/episode/:episodeId',
  // },
}

export default routes
