import IBaseDomain from '../../../App/InterfaceAdapters/IBaseDomain';
import IUserDomain from '../../../User/InterfaceAdapters/IUserDomain';
import ItemRepPayload from '../Payloads/ItemRepPayload';

interface IItemDomain extends IBaseDomain
{
    name: string;
    type: number;
    createdBy: IUserDomain;
    lastModifiedBy: IUserDomain;

    getCreatedBy(): IUserDomain;
    getLastModifiedBy(): IUserDomain;
    updateBuild(payload: ItemRepPayload): void;
}

export default IItemDomain;
