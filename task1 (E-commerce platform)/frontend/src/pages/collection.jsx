import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

    const { products , search , showSearch } = useContext(ShopContext)

    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relevant')

    const toggleCategory = (e) => {

        if (category.includes(e.target.value)) {

            setCategory(prev =>
                prev.filter(item => item !== e.target.value)
            )

        } else {

            setCategory(prev => [...prev, e.target.value])

        }

    }

    const toggleSubCategory = (e) => {

        if (subCategory.includes(e.target.value)) {

            setSubCategory(prev =>
                prev.filter(item => item !== e.target.value)
            )

        } else {

            setSubCategory(prev => [...prev, e.target.value])

        }

    }

    const applyFilter = () => {

        let productsCopy = products.slice()

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (category.length > 0) {

            productsCopy = productsCopy.filter(item =>
                category.includes(item.category)
            )

        }

        if (subCategory.length > 0) {

            productsCopy = productsCopy.filter(item =>
                subCategory.includes(item.subCategory)
            )

        }

        setFilterProducts(productsCopy)

    }

    const sortProducts = () => {

        let fpCopy = filterProducts.slice()

        switch (sortType) {

            case 'low-high':

                setFilterProducts(
                    fpCopy.sort((a, b) => a.price - b.price)
                )

                break

            case 'high-low':

                setFilterProducts(
                    fpCopy.sort((a, b) => b.price - a.price)
                )

                break

            default:

                setFilterProducts(
                    fpCopy.sort((a, b) => b.bestseller - a.bestseller)
                )

                break

        }

    }

    useEffect(() => {
        applyFilter()
    }, [category, subCategory, products , search , showSearch])

    useEffect(() => {
        sortProducts()
    }, [sortType])

    useEffect(() => {
        setFilterProducts(products)
    }, [products])

    return (

        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-[#C9A227]/20'>

            {/* FILTER OPTIONS */}

            <div className='min-w-60'>

                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className='my-2 text-xl flex items-center cursor-pointer gap-2 text-[#7A1E2C] font-medium'
                >
                    FILTERS

                    <img
                        className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
                        src={assets.dropdown_icon}
                        alt=""
                    />

                </p>

                {/* CATEGORY FILTER */}

                <div className={`border border-[#C9A227]/30 pl-5 py-3 mt-6 bg-[#FFFBF5] ${showFilter ? '' : 'hidden'} sm:block`}>

                    <p className='mb-3 text-sm font-medium text-[#7A1E2C]'>
                        CATEGORIES
                    </p>

                    <div className='flex flex-col gap-2 text-sm text-[#3A2D28]'>

                        <p className='flex gap-2'>
                            <input
                                className='w-3'
                                type="checkbox"
                                value={'Women Ethnic Wear'}
                                onChange={toggleCategory}
                            />
                            Women Ethnic Wear
                        </p>

                        <p className='flex gap-2'>
                            <input
                                className='w-3'
                                type="checkbox"
                                value={'Jewelry'}
                                onChange={toggleCategory}
                            />
                            Jewelry
                        </p>

                        <p className='flex gap-2'>
                            <input
                                className='w-3'
                                type="checkbox"
                                value={'Accessories'}
                                onChange={toggleCategory}
                            />
                            Accessories
                        </p>

                    </div>

                </div>

                {/* SUBCATEGORY FILTER */}

                <div className={`border border-[#C9A227]/30 pl-5 py-3 my-5 bg-[#FFFBF5] ${showFilter ? '' : 'hidden'} sm:block`}>

                    <p className='mb-3 text-sm font-medium text-[#7A1E2C]'>
                        TYPE
                    </p>

                    <div className='flex flex-col gap-2 text-sm text-[#3A2D28] max-h-80 overflow-y-auto'>

                        {[
                            'Ear Cuff',
                            'Hair Accessory',
                            'Bridal Eyewear',
                            'Earrings',
                            'Necklace',
                            'Complete set',
                            'Ornamental Watch',
                            'Hand Harness',
                            'Designer Blouse',
                            'Party Wear',
                            'Designer Suit',
                            'Bridal Lehenga',
                            'Designer Saree',
                            'Designer Gown'
                        ].map((item) => (

                            <p key={item} className='flex gap-2'>
                                <input
                                    className='w-3'
                                    type="checkbox"
                                    value={item}
                                    onChange={toggleSubCategory}
                                />
                                {item}
                            </p>

                        ))}

                    </div>

                </div>

            </div>

            {/* RIGHT SIDE */}

            <div className='flex-1'>

                <div className='flex justify-between text-base sm:text-2xl mb-4'>

                    <Title text1={'ALL'} text2={' COLLECTIONS'} />

                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className='border border-[#C9A227]/30 text-sm px-3 py-2 bg-[#FFFBF5] text-[#7A1E2C] rounded'
                    >

                        <option value="relevant">
                            Sort by: Featured
                        </option>

                        <option value="low-high">
                            Price: Low to High
                        </option>

                        <option value="high-low">
                            Price: High to Low
                        </option>

                    </select>

                </div>

                {/* PRODUCTS */}

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

                    {filterProducts.map((item, index) => (

                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />

                    ))}

                </div>

            </div>

        </div>

    )

}

export default Collection