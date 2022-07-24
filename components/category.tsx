
import { categories } from '../util/constant/constant'
import Link from 'next/link'

const Category = () => {
    return (
        <div>
            Category  
            {categories.map((v) => (
                <Link as={`/categories/${v.category}`} href="/categories/[category]">
                    {/* <a className="hover:underline">{v.category}</a> */}
                    <a className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{v.category}</a>
                </Link>
            ))}
        </div>

    )
}

export default Category