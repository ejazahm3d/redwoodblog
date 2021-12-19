import { UserInputError } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'
import { CreateContactInput } from 'types/graphql'

const validate = (input: CreateContactInput) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new contact", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }: { input: CreateContactInput }) => {
  validate(input)
  return db.contact.create({ data: input })
}
