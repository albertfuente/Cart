import { shallowMount } from '@vue/test-utils'
import Item from './../atoms/Item.vue'

describe('Item.vue/Item', () => {
  it('mounts the component and creates a snapshot inside the __snapshots__ folder', () => {
    const wrapper = shallowMount(Item)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('is rendering main div with correct class', () => {
    const wrapper = shallowMount(Item)
    expect(wrapper.classes()).toContain('item-atom')
  })

})