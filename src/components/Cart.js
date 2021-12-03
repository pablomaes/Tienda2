import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, ProductTotalPrice } from './styledComponents';
import { Top, TopButton, TopText, Summary, SummaryTitle, SummaryItemText, SummaryItemPrice, SummaryItem, Button } from './styledCart'

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>Carrito:</TitleCart>
            <Top>
                <Link to='/'><TopButton>Continuar comprando</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>Eliminar selección</TopButton>
                    : <TopText>El carrito está vacío</TopText>
                }
            </Top>
            <ContentCart>
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <Product key={item.idItem}>
                        <ProductDetail>
                            <ImageCart src={item.imgItem} />
                            <Details>
                            <span>
                                <b>Producto:</b> {item.nameItem}
                            </span>
                            <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>Eliminar</TopButton>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {item.costItem} c/u</ProductPrice>
                            <ProductTotalPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductTotalPrice>
                        </PriceDetail>
                        </Product>
                        )
                        : <TitleCart></TitleCart>
                    }

{
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>Tu compra:</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ {test.calcSubTotal()} </SummaryItemPrice>
                            </SummaryItem>
                            <hr/>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ {test.calcTotal()} </SummaryItemPrice>
                            </SummaryItem>
                            <Button>Comprar ahora</Button>
                        </Summary>
                }


            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;