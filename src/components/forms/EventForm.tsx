'use client'
import { useRouter } from '@/navigation'
import { Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FormEvent, useState } from 'react'
import { InputBase } from '../common/InputBase'

const EventForm = () => {
  const t = useTranslations('Subscribe')
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    event.preventDefault()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Event registration submitted:', { name, email })
    setName('')
    setEmail('')
    setIsSubmitting(false)
    router.replace('/feedback')
  }

  return (
    <div className='max-w-2xl p-6 space-y-3'>
      <h1 className='text-3xl font-bold text-blue-800'>{t('title')}</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <InputBase
            id='name'
            name='name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            label={t('name')}
            placeholder={t('namePlaceholder')}
            className='w-full'
          />
        </div>
        <div>
          <InputBase
            id='email'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={t('email')}
            placeholder={t('emailPlaceholder')}
            className='w-full'
          />
        </div>
        <button
          type='submit'
          className='w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition flex justify-center items-center'
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className='animate-spin mr-2' size={20} />
          ) : (
            t('submitButton')
          )}
        </button>
      </form>
    </div>
  )
}

export default EventForm
