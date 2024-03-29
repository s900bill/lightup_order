// pages/index.js
import Image from 'next/image' // 添加 useState 和 useEffect 导入

function Category({ categorys, onSelect }) {
  return (
    <div>
      <ul role="list">
        {categorys &&
          categorys.map((category) => (
            <li
              key={category.categoryid}
              onClick={() => onSelect(category)} // 修复这里的 onClick
              className="h1 group relative flex cursor-pointer  justify-between border-b border-current pb-3  pt-8 text-primary first:pt-0"
            >
              <div>{category.name}</div>
              <div>
                <Image src="/images/star.svg" alt="star" width={36} height={36} />
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Category
