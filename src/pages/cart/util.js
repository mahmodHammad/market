const formatPrice = (x=100, currency) => {
    switch (currency) {
      case 'BRL':
        return x.toFixed(2).replace('.', ',');
      default:
        return x.toFixed(2);
    }
  };
  
  export default {
    formatPrice
  };
  