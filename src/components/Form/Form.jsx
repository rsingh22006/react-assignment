import { useFormData } from '../../customHooks/useFormData';
import { useShowPassword } from "../../customHooks/useShowPassword";
import { getInputData } from "../../utils/getInputData";
import { InputField } from './InputField';
import { Button } from '../Button';

export const Form = ({ type, className, initData }) => {
    const { formData, errors: { errors, isErrorOccured }, handleChange, handleSubmit } = useFormData(type, initData);
    const { showPassword, handleClickShow } = useShowPassword(type === 'login' ? 'single' : 'double');
    const inputData = getInputData(type, formData, showPassword, errors);
    return (
        <form
            className={className}
            onSubmit={(e) => handleSubmit(e, isErrorOccured)}
        >
            <div className={className !== 'login' ? 'gridType' : ''}>
                {inputData.map((el) =>
                    <InputField
                        key={el.id}
                        name={el.name}
                        show={el?.show}
                        value={el.value}
                        labelValue={el.labelValue}
                        error={el.error}
                        handleChange={handleChange}
                        handleClickShow={el.name.toLocaleLowerCase().includes('password') ? handleClickShow : ''}
                    />
                )}
            </div>
            <Button type='submit' text={type === 'profile' ? 'Submit Changes' : type} w={'w-40'} bg={'bg-theme'} isGrid={type!== 'login' ? 'absolute right-0' : ''} />
        </form>
    )
}