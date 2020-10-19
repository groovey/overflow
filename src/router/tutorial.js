import Basic from '@/views/tutorials/Basic'
import Scope from '@/views/tutorials/Scope'
import Props from '@/views/tutorials/Props'
import Params from '@/views/tutorials/Params'
import Emit from '@/views/tutorials/Emit'
import Model from '@/views/tutorials/Model'
import Computed from '@/views/tutorials/Computed'

export default [
  {
    path: '/tutorials/Basic',
    name: 'Basic',
    component: Basic
  },
  {
    path: '/tutorials/scope',
    name: 'Scope',
    component: Scope
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
  }

]
