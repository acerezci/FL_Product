module.exports = {
  status: {
    gender: {
      label: 'Cinsiyet',
      items: {
        male: { label: 'Erkek', value: 'male' },
        female: { label: 'Kadın', value: 'female' },
      },
    },
    colors: {
      label: 'Renkler',
      items: {
        red: { label: 'Kırmızı', value: 'red' },
        gray: { label: 'Gri', value: 'gray' },
        yellow: { label: 'Sarı', value: 'yellow' },
        black: { label: 'Siyah', value: 'black' },
      },
    },
    cloth: {
      label: 'Kumaş Türü',
      items: {
        leather: { label: 'Deri', value: 'leather' },
        cotton: { label: 'Pamuk', value: 'cotton' },
        linen: { label: 'Keten', value: 'linen' },
        velvet: { label: 'Kadife', value: 'velvet' },
      },
    },
    sizes: {
      label: 'Beden',
      items: {
        s: { label: 'S', value: 's' },
        m: { label: 'M', value: 'm' },
        l: { label: 'L', value: 'l' },
        xl: { label: 'XL', value: 'xl' },
        xxl: { label: 'XXL', value: 'xxl' },
      },
    },
    cut: {
      label: 'Kesim Türü',
      items: {
        slimfit: { label: 'Dar Kesim', value: 'slimfit' },
        loose: { label: 'Bol Kesim', value: 'loose' },
      },
    },
    collar: {
      label: 'Yaka Tipi',
      items: {
        straightCollar: { label: 'Düz Yaka', value: 'straightCollar' },
        roundCollar: { label: 'Yuvarlak Yaka', value: 'roundCollar' },
      },
    },
  },
  range: {
    price: {
      label: 'Fiyat Aralığı',
      items: {
        min: { label: 'min TL', value: 'min' },
        max: { label: 'max TL', value: 'max' },
      },
    },
    year: {
      label: 'Yıl',
      items: {
        min: { label: 'min Yıl', value: 'min' },
        max: { label: 'max Yıl', value: 'max' },
      },
    },
  },
};
