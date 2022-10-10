import React from 'react'

const CardDetails = () => {
    const { className, handleSubmit } = this.props;
  return (
    <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='shipping-form__name'
                type='name'
                title='Name'
                placeholder='Name'
                name='name'
                component={FormInput}/>

                 <Field className='shipping-form__card'
                type='card'
                title='card'
                placeholder='card'
                name='card'
                component={FormInput}/>

            </form>
  )
}

export default CardDetails