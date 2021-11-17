import { shallowMount, mount } from '@vue/test-utils'
import Cart from './../components/Cart.vue'

describe('Cart.vue/Cart', () => {
  it('mounts the component and creates a snapshot inside the __snapshots__ folder', () => {
    const wrapper = shallowMount(Cart)
    expect(wrapper.html()).toMatchSnapshot()
  })


  it('does not display the Cart if items are empty ', () => {
    const items = []
    const wrapper = mount(Cart, { propsData: { items } })

    expect(wrapper.find('.cart-component-items-container').exists()).toBe(false)
  })
})
