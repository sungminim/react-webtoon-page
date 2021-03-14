import React, { useState } from 'react'

function Form() {
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    description: '',
    imageURL: '',
  })

  const handleFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log(formValues)
  }

  return (
    <div>
      <input
        name="title"
        placeholder="제목"
        onChange={handleFormValues}
        value={formValues.title}
      />
      <input
        name="author"
        placeholder="작가"
        onChange={handleFormValues}
        value={formValues.author}
      />
      <input
        name="description"
        placeholder="설명"
        onChange={handleFormValues}
        value={formValues.description}
      />
      <input
        name="imageURL"
        placeholder="이미지"
        onChange={handleFormValues}
        value={formValues.imageURL}
      />

      <button onClick={handleSubmit}>등록</button>
    </div>
  )
}

export default Form
