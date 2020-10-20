import Basic from '@/views/tutorials/Basic'
import Slot from '@/views/tutorials/Slot'
import Props from '@/views/tutorials/Props'
import Params from '@/views/tutorials/Params'
import Emit from '@/views/tutorials/Emit'
import Model from '@/views/tutorials/Model'
import Computed from '@/views/tutorials/Computed'
import Trans from '@/views/tutorials/Trans'
import Ajax from '@/views/tutorials/Ajax'

export default [
  {
    path: '/tutorials/Basic',
    name: 'tutorial-basic',
    component: Basic
  },
  {
    path: '/tutorials/slot',
    name: 'tutorial-slot',
    component: Slot
  },
  {
    path: '/tutorials/props',
    name: 'tutorial-props',
    component: Props
  },
  {
    path: '/tutorials/params/:id',
    name: 'tutorial-params',
    component: Params
  },
  {
    path: '/tutorials/emit',
    name: 'tutorial-emit',
    component: Emit
  },
  {
    path: '/tutorials/model',
    name: 'tutorial-model',
    component: Model
  },
  {
    path: '/tutorials/computed',
    name: 'tutorial-computed',
    component: Computed
  },
  {
    path: '/tutorials/transition',
    name: 'tutorial-trans',
    component: Trans
  },
  {
    path: '/tutorials/ajax',
    name: 'tutorial-ajax',
    component: Ajax
  }
]
