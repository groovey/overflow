import Tutorials from '@/views/Tutorials.vue'
import Basic from '@/views/tutorials/Basic.vue'
import Slot from '@/views/tutorials/Slot.vue'
import Props from '@/views/tutorials/Props.vue'
import Params from '@/views/tutorials/Params.vue'
import Emit from '@/views/tutorials/Emit.vue'
import Model from '@/views/tutorials/Model.vue'
import Computed from '@/views/tutorials/Computed.vue'
import Trans from '@/views/tutorials/Trans.vue'
import Ajax from '@/views/tutorials/Ajax.vue'
import CompositionApi from '@/views/tutorials/CompositionApi.vue'

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
      },
      {
        path: 'composition-api',
        name: 'tutorial-composition-api',
        component: CompositionApi
      }
    ]
  }
]
