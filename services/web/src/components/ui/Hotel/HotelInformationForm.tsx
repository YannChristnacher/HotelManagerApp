import React from "react";
import {Field, VStack, Text, Input, Flex, Textarea, Separator} from "@chakra-ui/react";
import {IFormHotel} from "@/models/IFormHotel";
interface IProps {
    values: IFormHotel,
    setValues: (IFormHotel) => void,
    errors: { [key: string]: string[];}
}

export default function HotelInformationForm({values, setValues, errors}: IProps)
{


    return (
        <div>
            <Flex gap={2}>
                <VStack width="50%" spacing={4} align="stretch">


                    <Field.Root invalid={errors?.name}>
                        <Field.Label>
                            <Text textStyle="xs" color="gray.500">Nom</Text>
                        </Field.Label>
                        <Input
                            value={values.name}
                            onChange={(e) => setValues({...values, name: e.target.value} )}
                        />
                        <Field.ErrorText>{errors?.name}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={errors?.address1 || errors?.address2}>
                        <Field.Label>
                            <Text textStyle="xs" color="gray.500">Adresse </Text>
                        </Field.Label>
                        <Input
                            value={values.address1}
                            onChange={(e) => setValues({...values, address1: e.target.value} )}
                        />
                        <Input
                            value={values.address2}
                            onChange={(e) => setValues({...values, address2: e.target.value} )}
                        />
                        <Field.ErrorText>{errors?.address1}<br/>{errors?.address2}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={errors?.zipcode }>
                        <Field.Label>
                            <Text textStyle="xs" color="gray.500">Code postal </Text>
                        </Field.Label>
                        <Input
                            value={values.zipcode}
                            onChange={(e) => setValues({...values, zipcode: e.target.value} )}
                        />
                        <Field.ErrorText>{errors?.zipcode}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={errors?.city }>
                        <Field.Label>
                            <Text textStyle="xs" color="gray.500">Ville</Text>
                        </Field.Label>
                        <Input
                            value={values.city}
                            onChange={(e) => setValues({...values, city: e.target.value} )}
                        />
                        <Field.ErrorText>{errors?.city}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={errors?.city }>
                        <Field.Label>
                            <Text textStyle="xs" color="gray.500">Pays</Text>
                        </Field.Label>
                        <Input
                            value={values.country}
                            onChange={(e) => setValues({...values, country: e.target.value} )}
                        />
                        <Field.ErrorText>{errors?.country}</Field.ErrorText>
                    </Field.Root>



                </VStack>
                <VStack width="50%" spacing={4} align="stretch">
                    <Field.Root invalid={errors?.lat ||  errors?.lng}>
                        <Field.Label>
                            <Text textStyle="xs" color="gray.500">Position</Text>
                        </Field.Label>
                        <Input placeholder="Lattitude"
                               value={values.lat}
                               onChange={(e) => setValues({...values, lat: e.target.value} )}
                        />
                        <Input placeholder="Longitude"
                               value={values.lng}
                               onChange={(e) => setValues({...values, lng: e.target.value} )}
                        />
                        <Field.ErrorText>{errors?.lat}<br/>{errors?.lng}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={errors?.max_capacity}>
                        <Field.Label>
                            <Text textStyle="xs" color="gray.500">Capacité maximum d'hébergement</Text>
                        </Field.Label>
                        <Input
                            value={values.max_capacity}
                            onChange={(e) => setValues({...values, max_capacity: e.target.value} )}
                        />
                        <Field.ErrorText>{errors?.max_capacity}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={errors?.price_per_night}>
                        <Field.Label>
                            <Text textStyle="xs" color="gray.500">Prix par nuit</Text>
                        </Field.Label>
                        <Input
                            value={values.price_per_night}
                            onChange={(e) => setValues({...values, price_per_night: e.target.value} )}
                        />
                        <Field.ErrorText>{errors?.price_per_night}</Field.ErrorText>
                    </Field.Root>



                </VStack>

            </Flex>
            <Separator my={4}/>
            <VStack spacing={4} align="stretch">
                <Field.Root width={"100%"} invalid={errors?.description}>
                    <Field.Label>
                        <Text textStyle="xs" color="gray.500">Description </Text>
                    </Field.Label>
                    <Textarea
                        minHeight="100px"
                        value={values.description}
                        onChange={(e) => setValues({...values, description: e.target.value} )}
                    />
                    <Field.ErrorText>{errors?.description}</Field.ErrorText>
                </Field.Root>
            </VStack>
        </div>

    )
}