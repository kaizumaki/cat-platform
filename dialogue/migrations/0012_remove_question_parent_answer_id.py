# Generated by Django 2.1.10 on 2019-08-17 04:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dialogue', '0011_auto_20190715_1646'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='parent_answer_id',
        ),
    ]
