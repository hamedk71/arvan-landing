import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Field from '@/components/utils/field'
import Info from '@/components/utils/info'
import Subtitle from '@/components/utils/subTitle'
import { Button } from '@/components/utils/button'
import { EMAIL_REG, NAME_REG, NUMBER_REG } from '@/config/regex'
import { Arrow } from '@/components/icons'
import { CREATE } from '@/api/register'
import convertData from '@/config/convertData'
import { createStructure } from '@/constant/dataStructure'

export default function SendRequest() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setLoading(true)
    CREATE(convertData(data))
      .then(() => {
        toast.success('SUCCESS')
        reset(createStructure)
      })
      .catch(() => {
        toast.error('ERROR')
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <section className=' py-24 md:py-32 relative bg-secondaryDark overflow-hidden'>
      <div className='shadow'></div>
      <div className='container flex gap-[50px] xl:gap-[101px] relative flex-col lg:flex-row md:px-2'>
        <div className='xl:max-w-[500px] lg:max-w-md'>
          <Subtitle className='!text-green-400'>ارسال درخواست</Subtitle>
          <h3 className=' text-[28px] xl:text-[38px] mt-4 leading-[53px] text-white font-bold'>
            ثبت درخواست قرارداد سازمانی
          </h3>
          <Info className='text-gray-100 md:mt-8 mt-10'>
            پروکسی لایه ۴ به شما کمک می‌کند تا سرویس‌ها یا اپلیکیشن‌های مبتنی بر
            TCP خود را با استفاده از امن‌ترین روش‌ها در اختیار کاربران‌تان قرار
            دهید. اگر کسب‌وکار یا سازمانی بزرگ هستید، می‌توانید در کم‌تر از چند
            ثانیه درخواست خود را برای استفاده از این ویژگی کاربردی در فرم مقابل
            ثبت کنید.
          </Info>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col flex-1 mt-4'
        >
          <div className=' gap-y-6 gap-x-[14px] grid md:grid-cols-2'>
            <Field
              isDisabled={loading}
              title='نام و نام‌خانوادگی *'
              error={errors?.name?.message || ''}
              {...register('name', {
                required: 'نام و نام‌خانوادگی را وارد کنید',
                pattern: {
                  value: NAME_REG,
                  message: ' نام و نام‌خانوادگی را صحیح وارد کنید',
                },
                minLength: {
                  value: 3,
                  message: 'نام و نام‌خانوادگی باید بیشتر ۳ حرف باشد',
                },
              })}
            />
            <Field
              isDisabled={loading}
              title='ایمیل *'
              error={errors?.email?.message || ''}
              {...register('email', {
                required: ' ایمیل را وارد کنید',
                validate: true,
                pattern: {
                  value: EMAIL_REG,
                  message: ' ایمیل صحیح نیست',
                },
              })}
            />
            <Field
              isDisabled={loading}
              title='شماره همراه'
              error={errors?.mobile?.message || ''}
              {...register('mobile', {
                pattern: {
                  value: NUMBER_REG,
                  message: 'موبایل را صحیح وارد کنید',
                },
                maxLength: {
                  value: 11,
                  message: 'شماره موبایل باید ۱۱ رقمی باشد',
                },
                minLength: {
                  value: 11,
                  message: 'شماره موبایل باید ۱۱ رقمی باشد',
                },
              })}
            />
            <Field
              isDisabled={loading}
              title='نام شرکت *'
              error={errors?.companyName?.message || ''}
              {...register('companyName', {
                required: 'نام شرکت را وارد کنید',
                pattern: {
                  value: NAME_REG,
                  message: 'نام شرکت را صحیح وارد کنید',
                },
                minLength: {
                  value: 3,
                  message: 'نام شرکت باید بیشتر ۳ حرف باشد',
                },
              })}
            />
            <Field
              isDisabled={loading}
              title='شماره شرکت'
              error={errors?.companyNum?.message || ''}
              {...register('companyNum', {
                pattern: {
                  value: NUMBER_REG,
                  message: 'شماره شرکت را صحیح وارد کنید',
                },
              })}
            />
            <Field
              isDisabled={loading}
              title='موضوع'
              error={errors?.subject?.message || ''}
              {...register('subject', {
                pattern: {
                  value: NAME_REG,
                  message: 'موضوع را وارد کنید',
                },
              })}
            />
          </div>
          <Field
            isDisabled={loading}
            title='پیام *'
            className='mt-6'
            field='textarea'
            error={errors?.message?.message || ''}
            {...register('message', {
              required: 'پیام را وارد کنید',
            })}
          />
          <div className=' mt-[56px] md:mt-11 flex justify-end'>
            <Button
              isLoading={loading}
              type='submit'
              className=' px-5'
              shape='square'
            >
              ارسال درخواست
              <Arrow />
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
