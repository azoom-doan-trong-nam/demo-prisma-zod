import { z } from 'zod';
/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
export const CarRoomParkingContractScalarFieldEnumSchema = z.enum(['id', 'carRoomId', 'rent', 'rentTax', 'keyMoney', 'keyMoneyTax', 'contractProcedureFee', 'contractProcedureFeeTax', 'azoomProcedureFee', 'azoomProcedureFeeTax', 'renewalFee', 'renewalFeeTax', 'referralFee', 'referralFeeTax', 'deposit', 'teppekiRenewalFee', 'roomName']);
export const ParkingContractScalarFieldEnumSchema = z.enum(['id', 'parkingId', 'status', 'contractStartDate', 'monthToRenewContract', 'teppekiContractStatus', 'monthlyGuaranteeCommissionFeeRate']);
export const ContractorScalarFieldEnumSchema = z.enum(['id', 'email', 'legalEntity', 'name', 'repName', 'nameKana', 'repNameKana', 'zip', 'address', 'addressKana', 'moveDate', 'mobileTel', 'tel', 'fax', 'companyName', 'companyNameKana', 'companyDepartmentName', 'annualIncome', 'serviceYears', 'job', 'companyZip', 'companyAddress', 'companyAddressKana', 'companyTel', 'companyFax', 'moveSchedule', 'moveZip', 'moveAddress', 'moveAddressKana', 'createdDatetime', 'updatedDatetime', 'baseAddress']);
export const SortOrderSchema = z.enum(['asc', 'desc']);
export const NullsOrderSchema = z.enum(['first', 'last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// CAR ROOM PARKING CONTRACT SCHEMA
/////////////////////////////////////////
export const CarRoomParkingContractSchema = z.object({
    id: z.number().int(),
    carRoomId: z.number().int(),
    rent: z.number().int(),
    rentTax: z.number().int(),
    keyMoney: z.number().int(),
    keyMoneyTax: z.number().int(),
    contractProcedureFee: z.number().int(),
    contractProcedureFeeTax: z.number().int(),
    azoomProcedureFee: z.number().int(),
    azoomProcedureFeeTax: z.number().int(),
    renewalFee: z.number().int(),
    renewalFeeTax: z.number().int(),
    referralFee: z.number().int(),
    referralFeeTax: z.number().int(),
    deposit: z.number().int(),
    teppekiRenewalFee: z.number().int(),
    roomName: z.string().min(1, { message: "Please enter a room name" }),
});
// CAR ROOM PARKING CONTRACT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------
export const CarRoomParkingContractOptionalDefaultsSchema = CarRoomParkingContractSchema.merge(z.object({}));
/////////////////////////////////////////
// PARKING CONTRACT SCHEMA
/////////////////////////////////////////
export const ParkingContractSchema = z.object({
    id: z.number().int(),
    parkingId: z.number().int(),
    status: z.union([z.literal(-1), z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7)]),
    contractStartDate: z.coerce.date({ required_error: "Please select a date and time", invalid_type_error: "That's not a date!", }),
    monthToRenewContract: z.number().int(),
    teppekiContractStatus: z.union([z.literal(-1), z.literal(0), z.literal(1), z.literal(null)]),
    monthlyGuaranteeCommissionFeeRate: z.number(),
});
// PARKING CONTRACT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------
export const ParkingContractOptionalDefaultsSchema = ParkingContractSchema.merge(z.object({}));
/////////////////////////////////////////
// CONTRACTOR SCHEMA
/////////////////////////////////////////
export const ContractorSchema = z.object({
    id: z.number().int(),
    email: z.string().email({ message: 'Invalid email' }),
    legalEntity: z.union([z.literal(1), z.literal(2)]),
    name: z.string(),
    repName: z.string().nullable(),
    nameKana: z.string().nullable(),
    repNameKana: z.string().nullable(),
    zip: z.string().nullable(),
    address: z.string().nullable(),
    addressKana: z.string().nullable(),
    moveDate: z.coerce.date().nullable(),
    mobileTel: z.string().nullable(),
    tel: z.string().nullable(),
    fax: z.string().nullable(),
    companyName: z.string().nullable(),
    companyNameKana: z.string().nullable(),
    companyDepartmentName: z.string().nullable(),
    annualIncome: z.number().int().nullable(),
    serviceYears: z.number().int().nullable(),
    job: z.string().nullable(),
    companyZip: z.string().nullable(),
    companyAddress: z.string().nullable(),
    companyAddressKana: z.string().nullable(),
    companyTel: z.string().nullable(),
    companyFax: z.string().nullable(),
    moveSchedule: z.number().int().nullable(),
    moveZip: z.string().nullable(),
    moveAddress: z.string().nullable(),
    moveAddressKana: z.string().nullable(),
    createdDatetime: z.coerce.date(),
    updatedDatetime: z.coerce.date(),
    baseAddress: z.string().nullable(),
});
// CONTRACTOR OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------
export const ContractorOptionalDefaultsSchema = ContractorSchema.merge(z.object({
    createdDatetime: z.coerce.date().optional(),
    updatedDatetime: z.coerce.date().optional(),
}));
//# sourceMappingURL=index.js.map