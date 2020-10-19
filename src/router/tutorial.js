import Basic from '@/views/tutorials/Basic'
import Slot from '@/views/tutorials/Slot'
import Props from '@/views/tutorials/Props'
import Params from '@/views/tutorials/Params'
import Emit from '@/views/tutorials/Emit'
import Model from '@/views/tutorials/Model'
import Computed from '@/views/tutorials/Computed'
import Trans from '@/views/tutorials/Trans'

export default [
  {
    path: '/tutorials/Basic',
    name: 'Basic',
    component: Basic
  },
  {
    path: '/tutorials/slot',
    name: 'Slot',
    component: Slot
  },
  {
    path: '/tutorials/props',
    name: 'Props',
    component: Props
  },
  {
    path: '/tutorials/params/:id',
    name: 'Params',
    component: Params
  },
  {
    path: '/tutorials/emit',
    name: 'Emit',
    component: Emit
  },
  {
    path: '/tutorials/model',
    name: 'Model',
    component: Model
  },
  {
    path: '/tutorials/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/tutorials/transition',
    name: 'Trans',
    component: Trans
  }
]
