import { shallowMount, mount } from '@vue/test-utils'
import Header from './../components/Header.vue'

describe('Header.vue/Header', () => {
  it('mounts the component and creates a snapshot inside the __snapshots__ folder', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.html()).toMatchSnapshot()
  })


  it('does not display the Header if items are empty ', () => {
    const items = []
    const wrapper = mount(Header, { propsData: { items } })

    expect(wrapper.find('.header-component-items-container').exists()).toBe(false)
  })
})
