import { shallowMount, mount } from '@vue/test-utils'
import Summary from './../components/Summary.vue'

describe('Summary.vue/Summary', () => {
  it('mounts the component and creates a snapshot inside the __snapshots__ folder', () => {
    const wrapper = shallowMount(Summary)
    expect(wrapper.html()).toMatchSnapshot()
  })


  it('does not display the Summary if items are empty ', () => {
    const items = []
    const wrapper = mount(Summary, { propsData: { items } })

    expect(wrapper.find('.summary-component-items-container').exists()).toBe(false)
  })
})
