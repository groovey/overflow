import Tutorials from '@/pages/Tutorials.vue'
import Basic from '@/pages/tutorials/Basic.vue'
import Slot from '@/pages/tutorials/Slot.vue'
import Props from '@/pages/tutorials/Props.vue'
import Params from '@/pages/tutorials/Params.vue'
import Emit from '@/pages/tutorials/Emit.vue'
import Model from '@/pages/tutorials/Model.vue'
import Computed from '@/pages/tutorials/Computed.vue'
import Trans from '@/pages/tutorials/Trans.vue'
import Ajax from '@/pages/tutorials/Ajax.vue'
import CompositionApi from '@/pages/tutorials/CompositionApi.vue'

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
