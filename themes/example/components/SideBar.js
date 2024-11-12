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


}

