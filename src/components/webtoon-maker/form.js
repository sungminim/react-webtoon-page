import React, { useState } from 'react'

const DEFAULT_VALUES = {
  title: '',
  author: '',
  description: '',
  imageUrl: '',
}

function Form({ onAddWebtoon }) {
  const [formValues, setFormValues] = useState(DEFAULT_VALUES)

  const handleFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    onAddWebtoon(formValues)

    setFormValues(DEFAULT_VALUES)
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
        name="imageUrl"
        placeholder="이미지"
        onChange={handleFormValues}
        value={formValues.imageUrl}
      />
      <button onClick={handleSubmit}>등록</button>
    </div>
  )
}

export default Form
