exports.up = async function (knex) {
  return knex.schema
    .createTable("classes", (tbl) => {
      tbl.increments("class_id"); // leave blank and automatically makes auto inc PK
      tbl.text("class_name", 256).unique().notNullable();
      tbl.text("type", 256).notNullable();
      tbl.float("duration_minutes").notNullable();
      tbl.datetime("start_time").notNullable();
      tbl.float("intensity").notNullable();
      tbl.text("location").notNullable();
      tbl.float("registered_users").notNullable();
      tbl.float("max_class_size").notNullable();
      tbl
        .integer("instructor_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.text("username", 256).unique().notNullable();
      tbl.text("password", 256).notNullable();
      tbl.text("first_name", 256).notNullable();
      tbl.text("last_name", 256).notNullable();
      tbl
        .integer("user_type")
        .unsigned()
        .notNullable()
        .references("user_type_id")
        .inTable("user_type")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("user_type", (tbl) => {
      tbl.increments("user_type_id");
      tbl.text("type").unique();
    })
    .createTable("registered", (tbl) => {
      tbl.increments("registration_id");
      tbl
        .integer("class_id")
        .unsigned()
        .notNullable()
        .references("class_id")
        .inTable("classes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  return knex.schema
    .dropTableIfExists("classes")
    .dropTableIfExists("users")
    .dropTableIfExists("user_type")
    .dropTableIfExists("registered");
};
