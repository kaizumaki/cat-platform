# Generated by Django 2.1.9 on 2019-07-13 08:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0005_question_entity_type_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='entity_type_id',
            new_name='entity_id',
        ),
    ]