import { shallowMount } from '@vue/test-utils'
import List from './../components/List.vue'

describe('List.vue/List', () => {
  it('mounts the component and creates a snapshot inside the __snapshots__ folder', () => {
    const wrapper = shallowMount(List)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('is rendering main div with correct class', () => {
    const wrapper = shallowMount(List)
    expect(wrapper.classes()).toContain('list-component')
  })

})