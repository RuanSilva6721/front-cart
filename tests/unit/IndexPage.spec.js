import { mount } from '@vue/test-utils';
import MyComponent from './MyComponent.vue';

describe('MyComponent', () => {
  test('renders properly', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.title').exists()).toBe(true);
  });

  test('renders "Não há Marcas e Produtos cadastrados!!" when slideItemBrand is empty', () => {
    const wrapper = mount(MyComponent);
    wrapper.setData({ slideItemBrand: [] });
    expect(wrapper.find('.title').exists()).toBe(false);
    expect(wrapper.text()).toBe('Não há Marcas e Produtos cadastrados!!');
  });

  test('renders components with correct props when slideItemBrand has items', () => {
    const slideItemBrand = [{ id: 1, name: 'Brand 1' }, { id: 2, name: 'Brand 2' }];
    const productData = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];

    const wrapper = mount(MyComponent, {
      data() {
        return {
          slideItemBrand,
          productData
        };
      }
    });

    expect(wrapper.findComponent(TitleIndexComponent).exists()).toBe(true);
    expect(wrapper.findComponent(MenuAdminComponent).exists()).toBe(true);
    expect(wrapper.findComponent(MenuBrandComponent).props('slideItemBrand')).toBe(slideItemBrand);
    expect(wrapper.findComponent(CardComponent).props('productData')).toBe(productData);
  });

  test('fetches product data and brand data on mount', async () => {
    const mockProductData = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    const mockBrandData = [{ id: 1, name: 'Brand 1' }, { id: 2, name: 'Brand 2' }];
    // Mock do serviço de API usando jest.mock() ou uma biblioteca de mock como o axios-mock-adapter

    // Defina as respostas mock para as chamadas à API
    api.get.mockResolvedValueOnce({ data: mockProductData });
    api.get.mockResolvedValueOnce({ data: mockBrandData });

    const wrapper = mount(MyComponent);

    // Espere que as chamadas à API sejam concluídas
    await wrapper.vm.$nextTick();

    // Verifique se os dados foram atualizados corretamente no componente
    expect(wrapper.vm.productData).toEqual(mockProductData);
    expect(wrapper.vm.slideItemBrand).toEqual(mockBrandData);
  });

  // Teste de eventos: você pode adicionar testes para simular eventos e verificar se o estado é atualizado corretamente
});
