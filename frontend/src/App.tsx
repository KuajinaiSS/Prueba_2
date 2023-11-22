import { useEffect, useState } from 'react';
import agent from './services/api';
import { Typography, Grid, Paper, Button } from '@mui/material';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.product.list()
      .then(data => {
        setProducts(data); // Almacenamos todos los productos en el estado
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDeleteProduct = (productId: number) => {
    // Realiza la petición para eliminar el producto con el ID correspondiente
    agent.product.delete(productId)
      .then(() => {
        // Actualiza la lista de productos quitando el producto eliminado
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '16px' }}>
      <header style={{ textAlign: 'center', backgroundColor: 'blue', padding: '16px' }}>
        <Typography variant="h4" component="h1" sx={{ color: 'white' }}>
          Lista de Productos
        </Typography>
      </header>

      <main style={{ marginTop: '16px' }}>
        <Grid container spacing={4}>
          {products.map((product: any) => (
            <Grid item xs={12} md={4} key={product.id}>
              <Paper elevation={3} sx={{ padding: '16px' }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  {product.name}
                </Typography>

                <img src={product.image} alt={`Producto`} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '8px' }} />

                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {product.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '8px' }}>
                  Descripcion: {product.description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleDeleteProduct(product.id)}
                  sx={{
                    marginRight: '8px',
                    backgroundColor: 'red',
                    color: 'white',
                    '&:hover': { backgroundColor: 'darkred' },
                  }}
                >
                  Eliminar
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'blue',
                    color: 'white',
                    '&:hover': { backgroundColor: 'darkblue' },
                  }}
                >
                  Editar
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default App;
