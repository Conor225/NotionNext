import Live2D from '@/components/Live2D'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import CONFIG from '../config'
import Announcement from './Announcement'
import Catalog from './Catalog'
const ExampleRecentComments = dynamic(
  () => import('./RecentCommentListForExample')
)
/**
 * 侧边栏
 */
export const SideBar = props => {
  const { locale } = useGlobal()
  const { latestPosts, categoryOptions, notice, post } = props
  // 评论相关
  const COMMENT_WALINE_SERVER_URL = siteConfig(
    'COMMENT_WALINE_SERVER_URL',
    false
  )
  const COMMENT_WALINE_RECENT = siteConfig('COMMENT_WALINE_RECENT', false)

  // 文章详情页特殊布局
  const HIDDEN_NOTIFICATION =
    post && siteConfig('EXAMPLE_ARTICLE_HIDDEN_NOTIFICATION', false, CONFIG)

  // 文章详情页左右布局改为上下布局
  const LAYOUT_VERTICAL =
    post && siteConfig('EXAMPLE_ARTICLE_LAYOUT_VERTICAL', false, CONFIG)

  return (
    <>
