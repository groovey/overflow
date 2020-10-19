import Basic from '@/components/tutorials/Basic'
import Scope from '@/components/tutorials/Scope'
import Props from '@/components/tutorials/Props'
import Params from '@/components/tutorials/Params'
import Bind from '@/components/tutorials/Bind'
import Emit from '@/components/tutorials/Emit'
import Model from '@/components/tutorials/Model'

export default [
  {
    path: '/tutorials/Basic',
    name: 'Basic',
    component: Basic
  },
  {
    path: '/tutorials/Scope',
    name: 'Scope',
    component: Scope
  },
  {
    path: '/tutorials/Props',
    name: 'Props',
    component: Props
  },
  {
    path: '/tutorials/Params',
    name: 'Params',
    component: Params
  },
  {
    path: '/tutorials/Bind',
    name: 'Bind',
    component: Bind
  },
  {
    path: '/tutorials/Emit',
    name: 'Emit',
    component: Emit
  },
  {
    path: '/tutorials/Model',
    name: 'Model',
    component: Model
  }

]
