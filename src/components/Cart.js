import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, ProductTotalPrice } from './styledComponents';
import { Top, TopButton, TopText, Summary, SummaryTitle, SummaryItemText, SummaryItemPrice, SummaryItem, Button } from './styledCart'

import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from './utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);
    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.costItem,
          qty: item.qtyItem,
        }));
    
        test.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
          buyer: {
            name: "Pablo Maestu",
            email: "pablomaestu32@gmail.com",
            phone: "123456789"
          },
          total: test.calcTotal(),
          items: itemsForDB,
          date: serverTimestamp()
        };
      
        console.log(order);
        
        const createOrderInFirestore = async () => {
          
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
      
        createOrderInFirestore()
          .then(result => alert('Su orden fue creada con éxito. Tome nota del ID.\n\n\nOrder ID: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
      
        test.removeList();
      
      }



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
                            <Button onClick={ createOrder }>Comprar ahora</Button>
                        </Summary>
                }


            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;