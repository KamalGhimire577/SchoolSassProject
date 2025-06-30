import { Table,Column,Model,DataType } from "sequelize-typescript";
@Table({
  tableName: "users", //db table name
  modelName: "User", // table name for use in backend
  timestamps: true, // correct time column for insertion or updation
})
class User extends Model {
  @Column({
    primaryKey: true, // making id column promary key
    type: DataType.UUID, // setting datatype uuid
    defaultValue: DataType.UUIDV4, // most secure uuid version
  })
  declare id: string; // uuid most be string
  // on above we have problem on @Column for handle this we need to go tsconfig.json and  // "experimentalDecorators": true,    // "emitDecoratorMetadata": true uncomment line no 18 19

  @Column({
    type: DataType.STRING,
  })
  declare userName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @Column({
    type: DataType.ENUM("student", "teacher", "school", "super-admin"),
    defaultValue: "student",
  })
  declare role: string;
}
    export default User
