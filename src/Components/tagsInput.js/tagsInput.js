import  {useState} from 'react'



export default function TagsInput (props) {
 
    
  const [tags, setTags] = useState(props.tags);
	
    const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};

	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};

    return (
        <> 
        <div className="">
            <input  class='appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false'
                type="text"
                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                placeholder="Press enter to add skills"/>
        <ul id="tags">
            {tags.map((tag, index) => (
                <li key={index} className=" ">
                    <span className='bg-blue-500 px-1   rounded '>{tag}
                    <span className='  text-xl font-extrabold  ml-1 cursor-pointer'
                        onClick={() => removeTags(index)}>
                        x
                    </span></span>
                </li>
            ))}
        </ul>
            </div>
            </>
  )
}
