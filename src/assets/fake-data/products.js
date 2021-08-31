const product_01_image_01 = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5f8cb8c-cdc5-467f-9861-0f0b48144204/jordan-air-nfh-shoes-1msFvZ.png'
const product_01_image_02 = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a451d49d-2454-46cc-9c16-96726cea6367/jordan-air-nfh-shoes-1msFvZ.png'
// const product_01_image_03 = '../images/products/product-01 (3).jpg'

const product_02_image_01 = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ae84199e-1240-43d7-8635-b8e174e6f346/air-force-1-gore-tex-shoes-xkl3Ps.png'
const product_02_image_02 = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/93eb0f23-aaa0-4959-ae8a-b0a3eb0f4e36/air-force-1-gore-tex-shoes-xkl3Ps.png'

const product_03_image_01 = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5d2847b9-22c8-4d84-80ae-905b4cb8bbff/zoomx-vaporfly-next-2-road-racing-shoe-STlc3F.png'
const product_03_image_02 = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/88656484-143f-4751-a058-6dfd62b6e5b7/zoomx-vaporfly-next-2-road-racing-shoe-STlc3F.png'

const product_04_image_01 = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/926f1ff7-436d-4af7-8a48-5e25ccee3fd1/metcon-7-training-shoes-MVtzlX.png'
const product_04_image_02 = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3704a2da-3d84-403c-a9de-797444012581/metcon-7-training-shoes-MVtzlX.png'


const products = [
    {
        title: "Jordan Air NFH",
        price: '1890000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-jordan",
        colors: ["white", "black"],
        slug: "giay-jordan-air-nfh",
        size: ["42", "42.5", "43", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike Metcon 7",
        price: '1590000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-training-gym",
        colors: ["white", "red"],
        slug: "giay-nike-metcon-7",
        size: ["42", "42.5", "43", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike Air Force 1 GORE-TEX ®",
        price: '1900000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-life-style",
        colors: ["white", "orange", "yellow"],
        slug: "giay-nike-air-force-1-gore-tex",
        size: ["40", "41", "42", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Jordan Air NFH",
        price: '1940000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-jordan",
        colors: ["white", "black"],
        slug: "giay-jordan-air-nfh",
        size: ["42", "42.5", "43", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike Air Force 1 GORE-TEX ®",
        price: '1890000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-life-style",
        colors: ["white", "orange", "yellow"],
        slug: "giay-nike-air-force-1-gore-tex",
        size: ["40", "41", "42", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike Air Force 1 GORE-TEX ®",
        price: '1590000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-life-style",
        colors: ["white", "orange", "yellow"],
        slug: "giay-nike-air-force-1-gore-tex",
        size: ["40", "41", "42", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike Air Force 1 GORE-TEX ®",
        price: '1900000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-life-style",
        colors: ["white", "orange", "yellow"],
        slug: "giay-nike-air-force-1-gore-tex",
        size: ["40", "41", "42", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike ZoomX Vaporfly Next% 2",
        price: '1940000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "giay-running",
        colors: ["white", "orange", "blue"],
        slug: "giay-nike-zoomx-vaporfly-next",
        size: ["40", "41", "42", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike ZoomX Vaporfly Next% 2",
        price: '1890000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "giay-running",
        colors: ["white", "orange", "blue"],
        slug: "giay-nike-zoomx-vaporfly-next",
        size: ["40", "41", "42", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Jordan Air NFH",
        price: '1590000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-jordan",
        colors: ["white", "black"],
        slug: "giay-jordan-air-nfh",
        size: ["42", "42.5", "43", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike Air Force 1 GORE-TEX ®",
        price: '1900000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-life-style",
        colors: ["white", "orange", "yellow"],
        slug: "giay-nike-air-force-1-gore-tex",
        size: ["40", "41", "42", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike ZoomX Vaporfly Next% 2",
        price: '1940000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "giay-running",
        colors: ["white", "orange", "blue"],
        slug: "giay-nike-zoomx-vaporfly-next",
        size: ["40", "41", "42", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike Metcon 7",
        price: '1890000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-training-gym",
        colors: ["white", "red"],
        slug: "giay-nike-metcon-7",
        size: ["42", "42.5", "43", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Jordan Air NFH",
        price: '1590000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-jordan",
        colors: ["white", "black"],
        slug: "giay-jordan-air-nfh",
        size: ["42", "42.5", "43", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    {
        title: "Nike Metcon 7",
        price: '1900000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-training-gym",
        colors: ["white", "red"],
        slug: "giay-nike-metcon-7",
        size: ["42", "42.5", "43", "43.5"],
        description: "Mang trên chân đôi giày của chúng tôi là chìa khóa dẫn đến con đường thành công của bạn"
    },
    
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug
}

export default productData