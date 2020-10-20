import Tutorials from '@/views/Tutorials.vue'
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
    path: '/tutorials',
    name: 'tutorials',
    component: Tutorials,
    redirect: {
      name: 'tutorial-basic'
    },
    children: [
      {
        path: 'basic',
        name: 'tutorial-basic',
        component: Basic
      },
      {
        path: 'slot',
        name: 'tutorial-slot',
        component: Slot
      },
      {
        path: 'props',
        name: 'tutorial-props',
        component: Props
      },
      {
        path: 'params/:id',
        name: 'tutorial-params',
        component: Params
      },
      {
        path: 'emit',
        name: 'tutorial-emit',
        component: Emit
      },
      {
        path: 'model',
        name: 'tutorial-model',
        component: Model
      },
      {
        path: 'computed',
        name: 'tutorial-computed',
        component: Computed
      },
      {
        path: 'transition',
        name: 'tutorial-trans',
        component: Trans
      },
      {
        path: 'ajax',
        name: 'tutorial-ajax',
        component: Ajax
      }
    ]
  }
]
